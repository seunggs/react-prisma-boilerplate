import { uploadToS3, deleteFromS3 } from '../utils/fileApi'

const FileMutation = {
  async uploadFile(parent, { folder, file }, { prisma }, info) {
		const prismaResponse = await uploadToS3(prisma, folder, file)
		return prismaResponse
	},

	async uploadFiles(parent, { folder, files }, { prisma }, info) {
		const prismaResponses = await Promise.all(files.map(file => uploadToS3(prisma, folder, file)))
		return prismaResponses
	},

  async deleteFile(parent, { where }, { prisma }, info) {
		const { url } = where
		const prismaResponse = await deleteFromS3(prisma, url)
		return prismaResponse
	},
}

export { FileMutation as default }