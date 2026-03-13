-- AlterTable
ALTER TABLE `veiculo` ADD COLUMN `apresentacao` VARCHAR(191) NULL,
    ADD COLUMN `cambio` VARCHAR(191) NULL,
    ADD COLUMN `estribo` VARCHAR(191) NULL,
    ADD COLUMN `grafismo` VARCHAR(191) NULL,
    ADD COLUMN `informacaoAdicional` VARCHAR(191) NULL,
    ADD COLUMN `licenciamento` VARCHAR(191) NULL,
    ADD COLUMN `localizacao` VARCHAR(191) NULL,
    ADD COLUMN `monocela` VARCHAR(191) NULL,
    ADD COLUMN `pertence` VARCHAR(191) NULL,
    ADD COLUMN `radio` VARCHAR(191) NULL,
    ADD COLUMN `tipoTracao` VARCHAR(191) NULL,
    ADD COLUMN `ultimaRevisao` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `veiculoajuste` ADD COLUMN `apresentacao` VARCHAR(191) NULL,
    ADD COLUMN `cambio` VARCHAR(191) NULL,
    ADD COLUMN `estribo` VARCHAR(191) NULL,
    ADD COLUMN `grafismo` VARCHAR(191) NULL,
    ADD COLUMN `informacaoAdicional` VARCHAR(191) NULL,
    ADD COLUMN `licenciamento` VARCHAR(191) NULL,
    ADD COLUMN `localizacao` VARCHAR(191) NULL,
    ADD COLUMN `monocela` VARCHAR(191) NULL,
    ADD COLUMN `pertence` VARCHAR(191) NULL,
    ADD COLUMN `radio` VARCHAR(191) NULL,
    ADD COLUMN `tipoTracao` VARCHAR(191) NULL,
    ADD COLUMN `ultimaRevisao` DATETIME(3) NULL;

-- CreateTable
CREATE TABLE `VeiculoSnapshot` (
    `id` VARCHAR(191) NOT NULL,
    `mesReferencia` VARCHAR(191) NOT NULL,
    `patrimonio` VARCHAR(191) NOT NULL,
    `placa` VARCHAR(191) NULL,
    `marcaModelo` VARCHAR(191) NULL,
    `ano` INTEGER NULL,
    `grupo` VARCHAR(191) NULL,
    `programa` VARCHAR(191) NULL,
    `opmCodigo` VARCHAR(191) NOT NULL,
    `prefixo` VARCHAR(191) NULL,
    `situacao` VARCHAR(191) NULL,
    `pertence` VARCHAR(191) NULL,
    `informacaoAdicional` VARCHAR(191) NULL,
    `tipoTracao` VARCHAR(191) NULL,
    `cambio` VARCHAR(191) NULL,
    `licenciamento` VARCHAR(191) NULL,
    `apresentacao` VARCHAR(191) NULL,
    `estribo` VARCHAR(191) NULL,
    `radio` VARCHAR(191) NULL,
    `grafismo` VARCHAR(191) NULL,
    `monocela` VARCHAR(191) NULL,
    `ultimaRevisao` DATETIME(3) NULL,
    `localizacao` VARCHAR(191) NULL,

    INDEX `VeiculoSnapshot_mesReferencia_idx`(`mesReferencia`),
    UNIQUE INDEX `VeiculoSnapshot_mesReferencia_patrimonio_key`(`mesReferencia`, `patrimonio`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VeiculoEmprestimo` (
    `id` VARCHAR(191) NOT NULL,
    `placa` VARCHAR(191) NOT NULL,
    `patrimonio` VARCHAR(191) NULL,
    `prefixo` VARCHAR(191) NULL,
    `marcaModelo` VARCHAR(191) NULL,
    `ano` VARCHAR(191) NULL,
    `cor` VARCHAR(191) NULL,
    `pertence` VARCHAR(191) NULL,
    `observacoes` VARCHAR(191) NULL,
    `detentorAtual` VARCHAR(191) NULL,
    `unidade` VARCHAR(191) NULL,
    `statusUso` VARCHAR(191) NOT NULL DEFAULT 'DISPONIVEL',
    `ativo` BOOLEAN NOT NULL DEFAULT true,
    `criadoEm` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `atualizadoEm` DATETIME(3) NOT NULL,

    UNIQUE INDEX `VeiculoEmprestimo_placa_key`(`placa`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Emprestimo` (
    `id` VARCHAR(191) NOT NULL,
    `veiculoId` VARCHAR(191) NOT NULL,
    `dataRetirada` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `quemRetirou` VARCHAR(191) NOT NULL,
    `kmRetirada` INTEGER NULL,
    `dataDevolucao` DATETIME(3) NULL,
    `quemEntregou` VARCHAR(191) NULL,
    `kmDevolucao` INTEGER NULL,
    `observacao` VARCHAR(191) NULL,
    `criadoEm` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `atualizadoEm` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `VeiculoSnapshot` ADD CONSTRAINT `VeiculoSnapshot_opmCodigo_fkey` FOREIGN KEY (`opmCodigo`) REFERENCES `Opm`(`codigo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Emprestimo` ADD CONSTRAINT `Emprestimo_veiculoId_fkey` FOREIGN KEY (`veiculoId`) REFERENCES `VeiculoEmprestimo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
