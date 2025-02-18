import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface Etapa2Instance extends Model {
    id_cliente: number;
    queixa_principal: string;
    frequenta_podologo: string;
    frequencia_visita_podologo: string;
    uso_medicamento: string;
    tipo_medicamento: string;
    alergico: string;
    alergia_substancia: string;
    posicao_trabalho: string;
    duracao_trabalho: string;
    tempo_em_pe: string;
    tempo_sentado: string;
    tempo_caminhando: string;
    numero_calcado: string;
    tipo_calcado_diario: string;
    tipo_calcado_qual: string;
    fumante: string;
    menstruacao: string;
    gestante: string;
    amamentando: string;
    dum: Date;
    pratica_atividade_fisica: string;
    frequencia_atividade_fisica: string;
    esporte_atividade: string;
    tipo_calcado_esporte: string;
}

export const Etapa2 = sequelize.define<Etapa2Instance>('Etapa2', {
    id_cliente: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    queixa_principal: { type: DataTypes.STRING, allowNull: true },
    frequenta_podologo: { type: DataTypes.STRING, allowNull: true },
    frequencia_visita_podologo: { type: DataTypes.STRING, allowNull: true },
    uso_medicamento: { type: DataTypes.STRING, allowNull: true },
    tipo_medicamento: { type: DataTypes.STRING, allowNull: true },
    alergico: { type: DataTypes.STRING, allowNull: true },
    alergia_substancia: { type: DataTypes.STRING, allowNull: true },
    posicao_trabalho: { type: DataTypes.STRING, allowNull: true },
    duracao_trabalho: { type: DataTypes.STRING, allowNull: true },
    tempo_em_pe: { type: DataTypes.STRING, allowNull: true },
    tempo_sentado: { type: DataTypes.STRING, allowNull: true },
    tempo_caminhando: { type: DataTypes.STRING, allowNull: true },
    numero_calcado: { type: DataTypes.STRING, allowNull: true },
    tipo_calcado_diario: { type: DataTypes.STRING, allowNull: true },
    tipo_calcado_qual: { type: DataTypes.STRING, allowNull: true },
    fumante: { type: DataTypes.STRING, allowNull: true },
    menstruacao: { type: DataTypes.STRING, allowNull: true },
    gestante: { type: DataTypes.STRING, allowNull: true },
    amamentando: { type: DataTypes.STRING, allowNull: true },
    dum: { type: DataTypes.DATE, allowNull: true },
    pratica_atividade_fisica: { type: DataTypes.STRING, allowNull: true },
    frequencia_atividade_fisica: { type: DataTypes.STRING, allowNull: true },
    esporte_atividade: { type: DataTypes.STRING, allowNull: true },
    tipo_calcado_esporte: { type: DataTypes.STRING, allowNull: true }
}, {
    tableName: 'dados_gerais',
    timestamps: false
});


