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
		"content": `<style>.bnrwytbng {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.628 16.173L5.5 41.79h37V16.173H21.154v7.116h-4.981V11.904H24V6.212H11.192v9.961z");
}
</style><path class="bnrwytbng"/>`,
		"fallback": "arcticons:you-have-mail",
	});
}

export default Component;
