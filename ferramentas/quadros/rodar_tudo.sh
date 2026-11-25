#!/usr/bin/env bash
# Processa a Videoteca inteira em lotes (quadros + legendas), salvando no GitHub depois de cada lote.
# Pode ser interrompido a qualquer momento: ao rodar de novo, continua de onde parou.
# Uso (na pasta mundo-marketing):  bash ferramentas/quadros/rodar_tudo.sh [tamanho_do_lote]
set -u
cd "$(dirname "$0")/../.."
LOTE="${1:-30}"
N=0
salvar() {
  git add videoteca/quadros ferramentas/quadros/saida videoteca/print-indice.js 2>/dev/null
  if ! git diff --cached --quiet; then
    git -c user.name="UniCPO Marketing" -c user.email="noreply@anthropic.com" commit -q -m "$1

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01QKmJrF3xHm7UCmdPRdVjhh"
    for t in 1 2 3 4; do git -c push.negotiate=true push -q origin main 2>&1 | tail -1 && break; sleep $((t * 10)); done
  fi
}
while true; do
  N=$((N + 1))
  echo "=== lote $N · $(date '+%d/%m %H:%M') ==="
  SAIDA_LOTE=$(python3 ferramentas/quadros/gerar_quadros.py --baixar --limite "$LOTE" 2>&1)
  echo "$SAIDA_LOTE"
  PEND=$(echo "$SAIDA_LOTE" | sed -n 's/^PENDENTES: //p' | tail -1)
  FEITOS=$(ls videoteca/quadros/*.jpg 2>/dev/null | wc -l)
  if [ $((N % 5)) -eq 0 ] || [ "${PEND:-1}" = "0" ]; then
    node ferramentas/gerar-indice-print.js
  fi
  salvar "Quadros e legendas da Videoteca: $FEITOS vídeos processados, ${PEND:-?} pendentes"
  if [ "${PEND:-1}" = "0" ]; then echo "=== TUDO PROCESSADO ==="; break; fi
  if ! echo "$SAIDA_LOTE" | grep -q "^Processados:"; then echo "=== o lote falhou; parando para revisão ==="; break; fi
done
