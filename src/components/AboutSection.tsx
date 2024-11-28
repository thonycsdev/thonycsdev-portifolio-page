import {
	Box,
	Grid,
	GridItem,
	ListItem,
	Text,
	UnorderedList
} from '@chakra-ui/react';
import React from 'react';
import CareerComponent from './Career/CareerComponent';
import useScreenSize from '@/hooks/useScreenSize';
import EducationComponent from './Education/EducationComponent';

function AboutSection() {
	const { isSmall } = useScreenSize();
	return (
		<GridItem height={'fit-content'} colSpan={3}>
			<Text fontWeight={'bold'} fontSize={'large'} paddingY={5}>
				Sobre mim
			</Text>
			<Text>
				Ola. Sou Anthony Coutinho, nasci do Rio de Janeiro e tenho tecnologia
				como minha paixao des de sempre
			</Text>
			<Text>
				Alem das minhas principais tecnologias conto com varias habilidades que
				desenvolvi com o tempo.
			</Text>
			<UnorderedList paddingY={2}>
				<ListItem>Rapida adaptacao a novas tecnologias ou ambientes</ListItem>
				<ListItem>Comunicacao</ListItem>
				<ListItem>Visao de Negocio</ListItem>
				<ListItem>Testes Automatizados</ListItem>
				<ListItem>Ambientes Cloud como AWS e Azure</ListItem>
			</UnorderedList>
			<Text>
				Estou apenas no começo da minha jornada profissional, mas tenho a
				certeza de que serei um dos profissionais mais dedicados por onde
				passar. Sou uma pessoa sonhadora e determinada, e meus projetos sempre
				refletem essa atitude. Dou prioridade à durabilidade, escalabilidade e
				desempenho, para que eu possa me orgulhar do meu trabalho e, ao mesmo
				tempo, entregar software de qualidade, que seja essencial para qualquer
				empresa.
			</Text>
			<Grid
				templateColumns={isSmall ? 'repeat(1,1fr)' : 'repeat(3,1fr)'}
				templateRows={'auto'}
			>
				<GridItem colSpan={isSmall ? 1 : 2}>
					<CareerComponent />
				</GridItem>
				<GridItem colStart={isSmall ? 'auto' : 3}>
					<EducationComponent />
				</GridItem>
			</Grid>
		</GridItem>
	);
}

export default AboutSection;
