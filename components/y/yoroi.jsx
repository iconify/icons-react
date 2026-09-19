import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xw1i5e4-b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.885 20.904L42.5 7.719h-5.652l-12.852 8.756l-12.844-8.867H5.5zm3.659 2.874l11.074-7.748v4.207l-7.859 5.541zm7.645 4.985l3.318-2.437v3.993l-.659.444zm-3.882 6.867l2.993-2.104L9.271 16.03v3.985zm-4.318 2.881L9.374 26.326v3.993l14.4 10.073z");
}
</style><path class="xw1i5e4-b"/>`,
		"fallback": "arcticons:yoroi",
	});
}

export default Component;
