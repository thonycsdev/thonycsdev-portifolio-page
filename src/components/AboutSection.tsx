import {
	Box,
	ListItem,
	Text,
	UnorderedList
} from '@chakra-ui/react';
import React from 'react';

function AboutSection() {
	return (
		<Box>
			<Text
				fontWeight={'bold'}
				fontSize={'large'}
				paddingY={5}
			>
				Sobre mim
			</Text>
			<Text>
				Ola. Sou Anthony Coutinho, nasci do Rio de
				Janeiro e tenho tecnologia como minha
				paixao des de sempre
			</Text>
			<Text>
				Alem das minhas principais tecnologias
				conto com varias habilidades que
				desenvolvi com o tempo.
			</Text>
			<UnorderedList paddingY={2}>
				<ListItem>
					Rapida adaptacao a novas tecnologias ou
					ambientes
				</ListItem>
				<ListItem>Comunicacao</ListItem>
				<ListItem>Visao de Negocio</ListItem>
				<ListItem>Testes Automatizados</ListItem>
				<ListItem>
					Ambientes Cloud como AWS e Azure
				</ListItem>
			</UnorderedList>
			<Text>
				Estou apenas no começo da minha jornada
				profissional, mas tenho a certeza de que
				serei um dos profissionais mais dedicados
				por onde passar. Sou uma pessoa sonhadora
				e determinada, e meus projetos sempre
				refletem essa atitude. Dou prioridade à
				durabilidade, escalabilidade e desempenho,
				para que eu possa me orgulhar do meu
				trabalho e, ao mesmo tempo, entregar
				software de qualidade, que seja essencial
				para qualquer empresa.
			</Text>
		</Box>
	);
}

export default AboutSection;
