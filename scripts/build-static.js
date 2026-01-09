import { exportStatic } from '@lvce-editor/shared-process'
import { join } from 'node:path'

await exportStatic({root: join(import.meta.dirname, '..')})
