import test from 'ava';
import { ComponentTest } from './helpers/generators';
import UserCard from '../components/user-card.vue';

test('mounts', t => {
	const componentTest = new ComponentTest(UserCard, t);

	componentTest('with no props', {
		props: {}
	});
});