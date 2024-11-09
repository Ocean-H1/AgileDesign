import { defineConfig } from 'eslint-define-config'
import fabricEslint  from '@umijs/fabric/dist/eslint'

export default defineConfig({
  extends: [fabricEslint]
})