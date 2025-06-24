#!/usr/bin/env bash
set -euo pipefail

INDIR="prisma/generated/zod/modelSchema"
OUTDIR="prisma/zod"

if [ ! -d "$INDIR" ]; then
  echo "❌ Directory '$INDIR' not found."
  exit 1
fi

if [ ! -d "$OUTDIR" ]; then
  echo "📁 Creating directory '$OUTDIR'"
  mkdir -p "$OUTDIR"
fi

echo "📦 Converting .ts → .js and stripping type-only lines..."

find "$INDIR" -type f -name '*.ts' ! -name '*.d.ts' | while read -r tsfile; do
  jsfile="$OUTDIR/$(basename "${tsfile%.ts}.js")"
  
  sed -E '/^(import type |export type )/d' "$tsfile" > "$jsfile"
  echo "✔ Processed: $(basename "$tsfile") → $(basename "$jsfile")"
done

echo "✅ Done."

CLEANDIR="prisma/generated"
echo "Cleaning Generated dir"
rm -r "$CLEANDIR"