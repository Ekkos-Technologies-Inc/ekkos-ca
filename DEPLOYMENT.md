# Deploying ekkos.ca to Vercel

## Project Mapping

- **Vercel Project**: `ekkosca`
- **Domain**: `ekkos.ca`
- **Codebase**: `apps/ekkosca`
- **Purpose**: Corporate website for Ekkos Technologies Inc.

## Deployment

Deploy directly from the `apps/ekkosca` directory:

```bash
cd /Volumes/MacMiniPort/DEV/EKKOS/apps/ekkosca
vercel link --project=ekkosca --yes
vercel deploy --prod --yes
```

Or from monorepo root:

```bash
cd /Volumes/MacMiniPort/DEV/EKKOS
vercel deploy --prod --yes --cwd apps/ekkosca
```

## Troubleshooting

### "No Next.js version detected"

**Solution**: The Root Directory in Vercel project settings must be set to `apps/ekkosca`.

1. Go to Vercel dashboard → Settings → General
2. Set Root Directory to: `apps/ekkosca`
3. Save and redeploy



