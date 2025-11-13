import { jest } from '@jest/globals'

export const context = {
  payload: {},
  repo: { owner: '', repo: '' }
}

export const getOctokit = jest.fn()
