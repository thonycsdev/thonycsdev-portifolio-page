import { ReactNode } from 'react';

type HomeCardComponentProps = {
	children: ReactNode;
};
export default function HomeCardComponent({
	children
}: HomeCardComponentProps) {
	return <>{children}</>;
}
