import { Router } from 'express'
import userControllers from './user.controller'

export const userRouter = Router()

userRouter.get('/', userControllers.getAll)
userRouter.get('/:id', userControllers.getById)
userRouter.post('/', userControllers.createSchema, userControllers.create)
userRouter.put('/:id', userControllers.updateSchema, userControllers.update)
userRouter.delete('/:id', userControllers.delete)