-- CreateTable
CREATE TABLE `Opm` (
    `id` VARCHAR(191) NOT NULL,
    `codigo` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `municipio` VARCHAR(191) NULL,
    `macroComando` VARCHAR(191) NULL,

    UNIQUE INDEX `Opm_codigo_key`(`codigo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `QffMeta` (
    `id` VARCHAR(191) NOT NULL,
    `opmCodigo` VARCHAR(191) NOT NULL,
    `grupo` VARCHAR(191) NOT NULL,
    `programa` VARCHAR(191) NOT NULL,
    `quantidadeFixada` INTEGER NOT NULL,

    UNIQUE INDEX `QffMeta_opmCodigo_grupo_programa_key`(`opmCodigo`, `grupo`, `programa`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Veiculo` (
    `id` VARCHAR(191) NOT NULL,
    `patrimonio` VARCHAR(191) NOT NULL,
    `placa` VARCHAR(191) NOT NULL,
    `marcaModelo` VARCHAR(191) NOT NULL,
    `ano` INTEGER NOT NULL,
    `grupo` VARCHAR(191) NOT NULL,
    `programa` VARCHAR(191) NOT NULL,
    `opmCodigo` VARCHAR(191) NOT NULL,
    `prefixo` VARCHAR(191) NULL,
    `situacao` VARCHAR(191) NULL,

    UNIQUE INDEX `Veiculo_patrimonio_key`(`patrimonio`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VeiculoAjuste` (
    `id` VARCHAR(191) NOT NULL,
    `patrimonio` VARCHAR(191) NOT NULL,
    `placa` VARCHAR(191) NOT NULL,
    `marcaModelo` VARCHAR(191) NOT NULL,
    `ano` INTEGER NOT NULL,
    `grupo` VARCHAR(191) NOT NULL,
    `programa` VARCHAR(191) NOT NULL,
    `opmCodigo` VARCHAR(191) NOT NULL,
    `prefixo` VARCHAR(191) NULL,
    `situacao` VARCHAR(191) NULL,
    `alteradoEm` DATETIME(3) NULL,

    UNIQUE INDEX `VeiculoAjuste_patrimonio_key`(`patrimonio`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `QffMeta` ADD CONSTRAINT `QffMeta_opmCodigo_fkey` FOREIGN KEY (`opmCodigo`) REFERENCES `Opm`(`codigo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Veiculo` ADD CONSTRAINT `Veiculo_opmCodigo_fkey` FOREIGN KEY (`opmCodigo`) REFERENCES `Opm`(`codigo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VeiculoAjuste` ADD CONSTRAINT `VeiculoAjuste_opmCodigo_fkey` FOREIGN KEY (`opmCodigo`) REFERENCES `Opm`(`codigo`) ON DELETE RESTRICT ON UPDATE CASCADE;
