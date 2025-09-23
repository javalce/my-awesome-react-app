FROM node:22-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV NODE_ENV=production

RUN corepack enable

FROM base AS builder

WORKDIR /code
COPY . ./

RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --frozen-lockfile
RUN pnpm run build

FROM base AS runner

WORKDIR /app

RUN addgroup -S nodejs && adduser -S nodejs -G nodejs
RUN chown -R nodejs /app

COPY --from=builder --chown=nodejs:nodejs /code/dist /app/

RUN pnpm add -g serve

USER nodejs

EXPOSE 3000

CMD ["serve", "-s"]
