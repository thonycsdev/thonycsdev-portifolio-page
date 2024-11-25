import { Experience } from '@/models/experience';
import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
type Props = {
	experience: Experience;
};
function ExperienceCard({ experience }: Props) {
	return (
		<Box
			background={'feeling.cardBg'}
			minW={'200px'}
			height={'180px'}
			p={10}
			display={'flex'}
			flexDirection={'column'}
			justifyContent={'center'}
			rounded={'lg'}
			_hover={{
				transform: 'scale(1.1)'
			}}
			transition={'all 0.3s ease-in-out'}
			cursor={'pointer'}
			onClick={() => alert('Modal ainda sendo construida')}
		>
			<Text
				mb={2}
				textAlign={'center'}
				size={'2xl'}
				as={'h6'}
				borderBottom={'1px'}
			>
				{experience.name}
			</Text>
			<Text>{experience.level}</Text>
			<Text mb={3}>{experience.description}</Text>
			<Flex boxShadow={'dark-lg'} p={3} justifyContent={'center'} m={2}>
				<span className="text-lg">
					{experience.started_year} - {experience.ended_year || 'Present'}
				</span>
			</Flex>
		</Box>
	);
}

export default ExperienceCard;
