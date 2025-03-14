// src/controllers/usuarioController.ts
import { Request, Response } from 'express';

import { Etapa1, Etapa1Instance } from "../models/Etapa1";
import { Etapa2, Etapa2Instance } from "../models/etapa2";
import { Etapa3, Etapa3Instance } from "../models/etapa3";
import { Etapa4, Etapa4Instance } from "../models/etapa4";
import { Etapa5, Etapa5Instance } from "../models/etapa5";
import { Etapa6, Etapa6Instance } from "../models/etapa6";

import { Op } from 'sequelize'; // Importa o operador correto



let formData: {
    id_cliente?: number;
    nome?: string;
    endereco?: string; 
    bairro?: string; 
    cidade?: string; 
    estado?: string; 
    cep?: string; 
    tel_res?: string; 
    telefone?: string; 
    tel_emergencia?: string; 
    data_nascimento?: Date; 
    sexo?: string; 
    profissao?: string; 
    email?: string; 
    contato?: string;
 } = {};

let formData2: {
    id_cliente?: number;
    queixa_principal?: string;
    frequenta_podologo?: 'Sim' | 'Não';
    frequencia_visita_podologo?: string;
    uso_medicamento?: 'Sim' | 'Não';
    tipo_medicamento?: string;
    alergico?: 'Sim' | 'Não';
    alergia_substancia?: string;
    posicao_trabalho?: 'Em pé' | 'Sentado' | 'Andando';
    duracao_trabalho?: string;
    tempo_em_pe?: 'Sim' | 'Não';
    tempo_sentado?: 'Sim' | 'Não';
    tempo_caminhando?: 'Sim' | 'Não';
    numero_calcado?: string;
    tipo_calcado_diario?: 'Chinelo' | 'Tênis' | 'Outro';
    tipo_calcado_qual?: 'Ortopédico' | 'Descanso' | 'Outro';
    fumante?: 'Sim' | 'Não';
    menstruacao?: 'Sim' | 'Não';
    gestante?: 'Sim' | 'Não';
    amamentando?: 'Sim' | 'Não';
    dum?: Date;
    pratica_atividade_fisica?: 'Sim' | 'Não';
    frequencia_atividade_fisica?: string;
    esporte_atividade?: string;
    tipo_calcado_esporte?: string;
} = {};

let formData3: {
    id_cliente?: number;
    Osteoporose?: boolean;
    Renal?: boolean;
    Epilepsia?: boolean;
    Quimioterapia_Radioterapia?: boolean;
    Hipotireoidismo?: boolean;
    Antecedente_Oncologico?: boolean;
    Hepatite?: boolean;
    Cardiopatia?: boolean;
    Hipotensao?: boolean;
    Reumatismo?: boolean;
    Hanseniase?: boolean;
    Cirurgia_MMII?: boolean;
    Marca_passo?: boolean;
    Hipertensao?: string;
    Insulina?: string;
    Dieta_Hidrica?: string;
    Injetavel?: boolean;
    Dieta_Alimentar?: boolean;
    Via_Oral?: boolean;
    Taxa_Glicemica?: string;
    Alteracoes_Vasculares?: boolean;
} = {};


let formData4: {
    id_cliente?: number;
    Tipo_Pisada?: string[];
    Flexivel_D?: boolean;
    Flexivel_E?: boolean;
    Rigido_E?: boolean;
    Rigido_D?: boolean;
    Espalmado_D?: boolean;
    Espalmado_E?: boolean;
    Martelo_E?: boolean;
    Martelo_D?: boolean;
    Queda_Metatarso_E?: boolean;
    Queda_Metatarso_D?: boolean;
    Tipo_Marcha?: 'Normal' | 'Pato' | 'Arrastada'
    Joelho?: string;
    Articulacao?: string;
    Sensibilidade_Dor?: string;
    Marcha_Descricao?: string;
} = {};

let formData5: {
    id_cliente?: number;
    PD_halux?: 'Normal' | 'Involuta' | 'Telha' | 'Funil' | 'Gancho' | 'Torquês' | 'Caracol' | 'Cunha';
    PD_2?: 'Normal' | 'Involuta' | 'Telha' | 'Funil' | 'Gancho' | 'Torquês' | 'Caracol' | 'Cunha';
    PD_3?: 'Normal' | 'Involuta' | 'Telha' | 'Funil' | 'Gancho' | 'Torquês' | 'Caracol' | 'Cunha';
    PD_4?: 'Normal' | 'Involuta' | 'Telha' | 'Funil' | 'Gancho' | 'Torquês' | 'Caracol' | 'Cunha';
    PD_5?: 'Normal' | 'Involuta' | 'Telha' | 'Funil' | 'Gancho' | 'Torquês' | 'Caracol' | 'Cunha';
    PE_halux?: 'Normal' | 'Involuta' | 'Telha' | 'Funil' | 'Gancho' | 'Torquês' | 'Caracol' | 'Cunha';
    PE_2?: 'Normal' | 'Involuta' | 'Telha' | 'Funil' | 'Gancho' | 'Torquês' | 'Caracol' | 'Cunha';
    PE_3?: 'Normal' | 'Involuta' | 'Telha' | 'Funil' | 'Gancho' | 'Torquês' | 'Caracol' | 'Cunha';
    PE_4?: 'Normal' | 'Involuta' | 'Telha' | 'Funil' | 'Gancho' | 'Torquês' | 'Caracol' | 'Cunha';
    PE_5?: 'Normal' | 'Involuta' | 'Telha' | 'Funil' | 'Gancho' | 'Torquês' | 'Caracol' | 'Cunha';
    Onicoatrofia?: boolean;
    Onicocriptose?: boolean;
    Onicorrexe?: boolean;
    Granuloma?: boolean;
    Onicogrifose?: boolean;
    Onicolise?: boolean;
    Onicofose?: boolean;
    Psoriase_ungueal?: boolean;
    Onicomicose?: boolean;
    outras_alteracoes?: string;
} = {};

let formData6: {
    id_cliente?: number;
    bromidrose?: boolean;
    hidrose?: boolean;
    desidrose?: boolean;
    isquemia?: boolean;
    mal_perfurante?: boolean;
    edema?: boolean;
    tinea?: boolean;
    psoriase?: boolean;
    tungiase?: boolean;
    verruga_plantar?: boolean;
    calo_dorsal?: boolean;
    querotose?: boolean;
    calo_plantar?: boolean;
    hiperqueratose?: boolean;
    calo_interdigital?: boolean;
    perfusao_PD?: 'Normal' | 'Pálido' | 'Cianótico';
    perfusao_PE?: 'Normal' | 'Pálido' | 'Cianótico';
    teve_erisipela?: 'Sim' | 'Não';
    outras_alteracoes?: string;
    comentarios?: string;
} = {};



export const etapa1 = async (req: Request, res: Response) => {
    try {
        // Busca o último cliente do banco de dados
        const ultimoCliente = await Etapa1.findOne({
            order: [['id_cliente', 'DESC']]
        });
        
        // Se não existir nenhum cliente, começa do 1
        // Se existir, incrementa 1 ao último ID
        const id_cliente = ultimoCliente ? Number(ultimoCliente.id_cliente) + 1 : 1;
        
        res.render('etapa1', { id_cliente });
    } catch (error) {
        console.error('Erro ao buscar último ID:', error);
        res.status(500).send('Erro ao gerar ID do cliente');
    }
};

export const etapa1Post = (req: Request, res: Response) => {
    try {
        const { id_cliente, nome, endereco, bairro, cidade, estado, cep, tel_res, telefone, tel_emergencia, data_nascimento, sexo, profissao, email, contato } = req.body;

        if (!id_cliente) {
            res.status(400).send("ID do cliente é necessário!");
            return;
        }

        // Inicializa a sessão se necessário
        req.session.id_cliente = id_cliente;
        req.session.formData = req.session.formData || {};

        // Armazena os dados na sessão
        req.session.formData = {
            id_cliente,
            nome,
            endereco,
            bairro,
            cidade,
            estado,
            cep,
            tel_res,
            telefone,
            tel_emergencia,
            data_nascimento,
            sexo,
            profissao,
            email,
            contato
        };

        console.log("Dados armazenados na sessão:", req.session.formData);

        res.redirect('/etapa2');
    } catch (error) {
        console.error("Erro ao processar etapa 1:", error);
        res.status(500).send("Erro ao armazenar os dados.");
    }
};







export const etapa2 = (req: Request, res: Response) => {
    // Recuperar o id_cliente da sessão
    const id_cliente = req.session.id_cliente;

    if (!id_cliente) {
        res.status(400).send("ID do cliente é necessário para continuar!");
        return;
    }

    res.render('etapa2', { id_cliente });
};

export const etapa2Post = (req: Request, res: Response) => {
    const id_cliente = req.session.id_cliente;

    if (!id_cliente) {
        res.status(400).send("ID do cliente é necessário!");
        return;
    }

    // Inicializa `formData2` na sessão se não existir
    req.session.formData2 = req.session.formData2 || {};

    // Salvar os dados na sessão
    req.session.formData2 = {
        id_cliente,
        queixa_principal: req.body.queixa_principal,
        frequenta_podologo: req.body.frequenta_podologo,
        frequencia_visita_podologo: req.body.frequencia_visita_podologo,
        uso_medicamento: req.body.uso_medicamento,
        tipo_medicamento: req.body.tipo_medicamento,
        alergico: req.body.alergico,
        alergia_substancia: req.body.alergia_substancia,
        posicao_trabalho: req.body.posicao_trabalho,
        duracao_trabalho: req.body.duracao_trabalho,
        tempo_em_pe: req.body.tempo_em_pe,
        tempo_sentado: req.body.tempo_sentado,
        tempo_caminhando: req.body.tempo_caminhando,
        numero_calcado: req.body.numero_calcado,
        tipo_calcado_diario: req.body.tipo_calcado_diario,
        tipo_calcado_qual: req.body.tipo_calcado_qual,
        fumante: req.body.fumante,
        menstruacao: req.body.menstruacao,
        gestante: req.body.gestante,
        amamentando: req.body.amamentando,
        dum: new Date(req.body.dum),
        pratica_atividade_fisica: req.body.pratica_atividade_fisica,
        frequencia_atividade_fisica: req.body.frequencia_atividade_fisica,
        esporte_atividade: req.body.esporte_atividade,
        tipo_calcado_esporte: req.body.tipo_calcado_esporte,
    };

    console.log("Etapa 2 armazenada na sessão:", req.session.formData2);

    res.redirect('/etapa3');
};



export const etapa3 = (req: Request, res: Response) => {
    const id_cliente = req.session.id_cliente;

    if (!id_cliente) {
        res.status(400).send("ID do cliente é necessário para continuar!");
        return;
    }

    res.render('etapa3', { id_cliente });
};

export const etapa3Post = (req: Request, res: Response) => {
    const id_cliente = req.session.id_cliente;

    if (!id_cliente) {
        res.status(400).send("ID do cliente é necessário!");
        return;
    }

    console.log("Dados recebidos na Etapa 3:", req.body); // <-- ADICIONE ISSO PARA DEBUG

    req.session.formData3 = req.session.formData3 || {};

    req.session.formData3 = {
        id_cliente,
        Osteoporose: req.body.Osteoporose,
        Renal: req.body.Renal,
        Epilepsia: req.body.Epilepsia,
        Quimioterapia_Radioterapia: req.body.Quimioterapia_Radioterapia,
        Hipotireoidismo: req.body.Hipotireoidismo,
        Antecedente_Oncologico: req.body.Antecedente_Oncologico,
        Hepatite: req.body.Hepatite,
        Cardiopatia: req.body.Cardiopatia,
        Hipertensao: req.body.Hipertensao,
        Reumatismo: req.body.Reumatismo,
        Hanseniase: req.body.Hanseniase,
        Cirurgia_MMII: req.body.Cirurgia_MMII,
        Marca_passo: req.body.Marca_passo, // <-- GARANTIR QUE ESSE NOME ESTÁ IGUAL AO FORMULÁRIO
        Hipotensao: req.body.Hipotensao,
        Insulina: req.body.Insulina,
        Dieta_Hidrica: req.body.Dieta_Hidrica,
        Injetavel: req.body.Injetavel,
        Dieta_Alimentar: req.body.Dieta_Alimentar,
        Via_Oral: req.body.Via_Oral,
        Taxa_Glicemica: req.body.Taxa_Glicemica,
        Alteracoes_Vasculares: req.body.Alteracoes_Vasculares
    };

    console.log("Etapa 3 armazenada na sessão:", req.session.formData3);

    res.redirect('/etapa4');
};


export const etapa4 = (req: Request, res: Response) => {
    const id_cliente = req.session.id_cliente;

    if (!id_cliente) {
        res.status(400).send("ID do cliente é necessário para continuar!");
        return;
    }

    res.render('etapa4', { id_cliente });
};

export const etapa4Post = (req: Request, res: Response) => {
    const id_cliente = req.session.id_cliente;

    if (!id_cliente) {
        res.status(400).send("ID do cliente é necessário!");
        return;
    }

    req.session.formData4 = req.session.formData4 || {};

    req.session.formData4 = {
        id_cliente,
        Tipo_Pisada: req.body.Tipo_Pisada,
        Flexivel_D: req.body.Flexivel_D,
        Flexivel_E: req.body.Flexivel_E,
        Rigido_D: req.body.Rigido_D,
        Rigido_E: req.body.Rigido_E,
        Espalmado_D: req.body.Espalmado_D,
        Espalmado_E: req.body.Espalmado_E,
        Martelo_D: req.body.Martelo_D,
        Martelo_E: req.body.Martelo_E,
        Queda_Metatarso_D: req.body.Queda_Metatarso_D,
        Queda_Metatarso_E: req.body.Queda_Metatarso_E,
        Tipo_Marcha: req.body.Tipo_Marcha,
        Joelho: req.body.Joelho,
        Articulacao: req.body.Articulacao,
        Sensibilidade_Dor: req.body.Sensibilidade_Dor,
        Marcha_Descricao: req.body.Marcha_Descricao
    };

    console.log("Etapa 4 armazenada na sessão:", req.session.formData4);

    res.redirect('/etapa5');
};




export const etapa5 = (req: Request, res: Response) => {
    const id_cliente = req.session.id_cliente;

    if (!id_cliente) {
        res.status(400).send("ID do cliente é necessário para continuar!");
        return;
    }

    res.render('etapa5', { id_cliente });
};

export const etapa5Post = (req: Request, res: Response) => {
    const id_cliente = req.session.id_cliente;

    if (!id_cliente) {
        res.status(400).send("ID do cliente é necessário!");
        return;
    }

    req.session.formData5 = req.session.formData5 || {};

    req.session.formData5 = {
        id_cliente,
        PD_halux: req.body.PD_halux,
        PD_2: req.body.PD_2,
        PD_3: req.body.PD_3,
        PD_4: req.body.PD_4,
        PD_5: req.body.PD_5,
        PE_halux: req.body.PE_halux,
        PE_2: req.body.PE_2,
        PE_3: req.body.PE_3,
        PE_4: req.body.PE_4,
        PE_5: req.body.PE_5,
        Onicoatrofia: req.body.Onicoatrofia,
        Onicocriptose: req.body.Onicocriptose,
        Onicorrexe: req.body.Onicorrexe,
        Granuloma: req.body.Granuloma,
        Onicogrifose: req.body.Onicogrifose,
        Onicolise: req.body.Onicolise,
        Onicofose: req.body.Onicofose,
        Psoriase_ungueal: req.body.Psoriase_ungueal,
        Onicomicose: req.body.Onicomicose,
        outras_alteracoes: req.body.outras_alteracoes
    };

    console.log("Etapa 5 armazenada na sessão:", req.session.formData5);

    res.redirect('/etapa6');
};


export const etapa6 = (req: Request, res: Response) => {
    const id_cliente = req.session.id_cliente;

    if (!id_cliente) {
        res.status(400).send("ID do cliente é necessário para continuar!");
        return;
    }

    res.render('etapa6', { id_cliente });
};

export const etapa6Post = (req: Request, res: Response) => {
    const id_cliente = req.session.id_cliente;

    if (!id_cliente) {
        res.status(400).send("ID do cliente é necessário!");
        return;
    }

    req.session.formData6 = req.session.formData6 || {};

    req.session.formData6 = {
        id_cliente,
        bromidrose: req.body.bromidrose,
        hidrose: req.body.hidrose,
        desidrose: req.body.desidrose,
        isquemia: req.body.isquemia,
        mal_perfurante: req.body.mal_perfurante,
        edema: req.body.edema,
        tinea: req.body.tinea,
        psoriase: req.body.psoriase,
        tungiase: req.body.tungiase,
        verruga_plantar: req.body.verruga_plantar,
        calo_dorsal: req.body.calo_dorsal,
        querotose: req.body.querotose,
        calo_plantar: req.body.calo_plantar,
        hiperqueratose: req.body.hiperqueratose,
        calo_interdigital: req.body.calo_interdigital,
        perfusao_PD: req.body.perfusao_PD,
        perfusao_PE: req.body.perfusao_PE,
        teve_erisipela: req.body.teve_erisipela,
        outras_alteracoes: req.body.outras_alteracoes,
        comentarios: req.body.comentarios
    };

    console.log("Etapa 6 armazenada na sessão:", req.session.formData6);

    res.redirect('/etapa7');
};



export const etapa7 = (req: Request, res: Response) => {
    const id_cliente = req.session.id_cliente;

    if (!id_cliente) {
        res.status(400).send("ID do cliente é necessário para continuar!");
        return;
    }

    // Passa todos os dados coletados das etapas para a página Mustache
    res.render("etapa7", {
        id_cliente,
        formData: req.session.formData || {},
        formData2: req.session.formData2 || {},
        formData3: req.session.formData3 || {},
        formData4: req.session.formData4 || {},
        formData5: req.session.formData5 || {},
        formData6: req.session.formData6 || {}
    });
};





export const submit = async (req: Request, res: Response): Promise<void> => {
    try {
        const id_cliente = req.session.id_cliente;

        if (!id_cliente) {
            res.status(400).send("ID do cliente não encontrado na sessão!");
            return;
        }

        // Recupera todos os dados armazenados na sessão
        const formData = req.session.formData || {};
        const formData2 = req.session.formData2 || {};
        const formData3 = req.session.formData3 || {};
        const formData4 = req.session.formData4 || {};
        const formData5 = req.session.formData5 || {};
        const formData6 = req.session.formData6 || {};

        // **Garante que cada objeto tenha `id_cliente` antes de salvar**
        formData.id_cliente = id_cliente;
        formData2.id_cliente = id_cliente;
        formData3.id_cliente = id_cliente;
        formData4.id_cliente = id_cliente;
        formData5.id_cliente = id_cliente;
        formData6.id_cliente = id_cliente;

        console.log("Salvando os seguintes dados no banco:", {
            formData,
            formData2,
            formData3,
            formData4,
            formData5,
            formData6
        });

        // **Salvar os dados no banco de dados**
        await Etapa1.create(formData);
        await Etapa2.create(formData2);
        await Etapa3.create(formData3);
        await Etapa4.create(formData4);
        await Etapa5.create(formData5);
        await Etapa6.create(formData6);

        // **Limpar a sessão após salvar os dados**
        req.session.destroy((err) => {
            if (err) {
                console.error("Erro ao destruir a sessão:", err);
                res.status(500).send("Erro ao finalizar a sessão.");
                return;
            }
            res.send('Cadastro concluído com sucesso!');
        });
    } catch (error) {
        console.error("Erro ao salvar no banco de dados:", error);
        res.status(500).send('Erro ao salvar no banco de dados.');
    }
};

export const pesquisarUsuario = async (req: Request, res: Response) => {
    try {
        const { termo } = req.query; // Obtém o termo da URL (pode ser nome ou ID)

        if (!termo || termo.toString().trim() === '') {
            return res.render('pesquisa', { mensagem: 'Digite um nome ou ID para pesquisar.', usuarios: [] });
        }

        let usuarios;

        if (!isNaN(Number(termo))) {
            // Se for um número, busca por ID exato e inclui todas as etapas
            usuarios = await Etapa1.findAll({
                where: { id_cliente: Number(termo) },
                include: [
                    { model: Etapa2, as: 'dados_gerais', required: false },
                    { model: Etapa3, as: 'dadosclinicos', required: false },
                    { model: Etapa4, as: 'alteracoeslesoespes', required: false },
                    { model: Etapa5, as: 'formato_unhas', required: false },
                    { model: Etapa6, as: 'alteracoeslesoes', required: false }
                ]
            });
        } else {
            // Se for texto, pesquisa pelo nome usando LIKE e inclui todas as etapas
            usuarios = await Etapa1.findAll({
                where: { nome: { [Op.like]: `%${termo}%` } },
                include: [
                    { model: Etapa2, as: 'dados_gerais', required: false },
                    { model: Etapa3, as: 'dadosclinicos', required: false },
                    { model: Etapa4, as: 'alteracoeslesoespes', required: false },
                    { model: Etapa5, as: 'formato_unhas', required: false },
                    { model: Etapa6, as: 'alteracoeslesoes', required: false }
                ]
            });
        }

        console.log(JSON.stringify(usuarios, null, 2)); // Verifica no console se os dados estão vindo corretamente

        return res.render('pesquisa', { usuarios, mensagem: usuarios.length ? '' : 'Nenhum usuário encontrado.' });

    } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        res.status(500).send('Erro interno ao buscar usuário.');
    }
};


export const detalhesUsuario = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const usuario = await Etapa1.findByPk(id);

        if (!usuario) {
            return res.status(404).send('Usuário não encontrado');
        }

        res.render('usuarioDetalhes', { usuario });

    } catch (error) {
        console.error('Erro ao buscar detalhes do usuário:', error);
        res.status(500).send('Erro interno');
    }
};





import moment from "moment"; // Adicione moment para formatar a data

export const editarUsuario = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        // Buscar usuário e incluir as Etapas 2 e 3
        const usuario = await Etapa1.findByPk(id, {
            include: [
                { model: Etapa2, as: 'dados_gerais' },
                { model: Etapa3, as: 'dadosclinicos' } // 🔥 Adicionando a Etapa 3
            ]
        });

        if (!usuario) {
            res.status(404).json({ message: "Usuário não encontrado" });
            return;
        }

        // Verifica se os dados existem, senão inicializa como vazio
        const dados_gerais = usuario.get('dados_gerais') || {}; 
        const dadosclinicos = usuario.get('dadosclinicos') || {}; // 🔥 Agora carrega também a Etapa 3

        // Formatar data de nascimento para exibição no input
        const dataNascimentoFormatada = usuario.data_nascimento
            ? moment(usuario.data_nascimento).format("YYYY-MM-DD")
            : "";

        // Renderizar a página de edição com todas as etapas carregadas
        res.render("editar", {
            usuario,
            dados_gerais,  // 🔥 Dados da Etapa 2
            dadosclinicos, // 🔥 Dados da Etapa 3 agora são passados para o Mustache
            dataNascimentoFormatada,
            isFeminino: usuario.sexo === "Feminino",
            isMasculino: usuario.sexo === "Masculino",
            isOutro: usuario.sexo === "Outro"
        });

    } catch (error) {
        console.error("Erro ao buscar usuário para edição:", error);
        res.status(500).json({ message: "Erro interno no servidor" });
    }
};






export const salvarEdicaoUsuario = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const {
            // Dados da Etapa 1
            nome, email, endereco, bairro, cidade, estado, cep, tel_res, telefone,
            tel_emergencia, contato, data_nascimento, profissao, sexo,

            // Dados da Etapa 2
            queixa_principal, frequenta_podologo, frequencia_visita_podologo,
            uso_medicamento, tipo_medicamento, alergico, alergia_substancia,
            posicao_trabalho, duracao_trabalho, tempo_em_pe, tempo_sentado,
            tempo_caminhando, numero_calcado, tipo_calcado_diario, tipo_calcado_qual,
            fumante, menstruacao, gestante, amamentando, dum,
            pratica_atividade_fisica, frequencia_atividade_fisica, esporte_atividade,
            tipo_calcado_esporte,

            // 🔥 **Novos Dados da Etapa 3**
            osteoporose, quimioterapia_radioterapia, antecedente_oncologico,
            reumatismo, marca_passo, hipotensao, injetavel, renal, hipotireoidismo,
            cardiopatia, hanseniase, epilepsia, hepatite, hipertensao,
            cirurgia_mmii, alteracoes_vasculares, insulina, dieta_hidrica,
            dieta_alimentar, via_oral, taxa_glicemica
        } = req.body;

        // 🔥 **1. Atualizar Etapa 1 (Dados Pessoais)**
        const usuario = await Etapa1.findByPk(id);
        if (!usuario) {
            res.status(404).json({ message: "Usuário não encontrado" });
            return;
        }
        await usuario.update({
            nome, email, endereco, bairro, cidade, estado, cep, tel_res, telefone,
            tel_emergencia, contato, data_nascimento, profissao, sexo
        });

        // 🔥 **2. Atualizar ou Criar Etapa 2 (Saúde e Hábitos)**
        let dados_gerais = await Etapa2.findOne({ where: { id_cliente: id } });
        if (dados_gerais) {
            await dados_gerais.update({
                queixa_principal, frequenta_podologo, frequencia_visita_podologo,
                uso_medicamento, tipo_medicamento, alergico, alergia_substancia,
                posicao_trabalho, duracao_trabalho, tempo_em_pe, tempo_sentado,
                tempo_caminhando, numero_calcado, tipo_calcado_diario, tipo_calcado_qual,
                fumante, menstruacao, gestante, amamentando, dum,
                pratica_atividade_fisica, frequencia_atividade_fisica, esporte_atividade,
                tipo_calcado_esporte
            });
        } else {
            await Etapa2.create({
                id_cliente: id,
                queixa_principal, frequenta_podologo, frequencia_visita_podologo,
                uso_medicamento, tipo_medicamento, alergico, alergia_substancia,
                posicao_trabalho, duracao_trabalho, tempo_em_pe, tempo_sentado,
                tempo_caminhando, numero_calcado, tipo_calcado_diario, tipo_calcado_qual,
                fumante, menstruacao, gestante, amamentando, dum,
                pratica_atividade_fisica, frequencia_atividade_fisica, esporte_atividade,
                tipo_calcado_esporte
            });
        }

        // 🔥 **3. Atualizar ou Criar Etapa 3 (Dados Clínicos)**
        let dadosclinicos = await Etapa3.findOne({ where: { id_cliente: id } });
        if (dadosclinicos) {
            console.log("Atualizando Etapa 3 para ID:", id);
            await dadosclinicos.update({
                osteoporose, quimioterapia_radioterapia, antecedente_oncologico,
                reumatismo, marca_passo, hipotensao, injetavel, renal, hipotireoidismo,
                cardiopatia, hanseniase, epilepsia, hepatite, hipertensao,
                cirurgia_mmii, alteracoes_vasculares, insulina, dieta_hidrica,
                dieta_alimentar, via_oral, taxa_glicemica
            });
        } else {
            console.log("Criando novo registro para Etapa 3 para ID:", id);
            await Etapa3.create({
                id_cliente: id,
                osteoporose, quimioterapia_radioterapia, antecedente_oncologico,
                reumatismo, marca_passo, hipotensao, injetavel, renal, hipotireoidismo,
                cardiopatia, hanseniase, epilepsia, hepatite, hipertensao,
                cirurgia_mmii, alteracoes_vasculares, insulina, dieta_hidrica,
                dieta_alimentar, via_oral, taxa_glicemica
            });
        }

        res.redirect("/pesquisa");
    } catch (error) {
        console.error("Erro ao salvar usuário editado:", error);
        res.status(500).json({ message: "Erro interno no servidor" });
    }
};



















