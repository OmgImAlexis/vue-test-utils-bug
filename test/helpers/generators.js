import { Fragment } from 'vue-fragment';
import { createLocalVue, shallowMount } from '@vue/test-utils';

/**
 * Simple component test generator.
 */
export class ComponentTest {
	/**
	 * Creates an instance of ComponentTest.
	 * @param {*} component - A Vue component.
 	 * @param {Object} t - Ava context object.
     * @returns {PropTest} Test function.
	 */
	constructor(component, t) {
		const localVue = createLocalVue();

		// Load fragment
		localVue.component('fragment', Fragment);

		// Mocked i18n
		t.context.$t = str => str;

		// Mocked ws connect
		t.context.$connect = () => {};


		/**
		 * A simple component test.
		 *
		 * @param {String} message - Test message.
		 * @param {Object} fields - Fields to pass component.
		 */
		const test = (message, fields) => {
			const { $store, $t } = t.context;

			const props = fields.props;
			delete fields.props;
			
			const newComponent = shallowMount(component,
				Object.assign({
					localVue,
					// Global components
					stubs: {
						'font-awesome-icon': true,
						'router-view': true,
						'v-dialog': true
					},
					mocks: {
						$store,
						$t
					},
					propsData: props
				},
				fields
			));

			t.snapshot(newComponent.html(), message);

			return newComponent;
		};

		return test;
	}
};
