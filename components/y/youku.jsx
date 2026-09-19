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
		"content": `<style>.nvc64umsv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.767 24c4.373 2.516 12.046 6.91 15.573 8.928");
}

.yexlm0_lf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.999 4.766a7.774 7.774 0 0 0-1.877 14.244L19.766 24l-8.646 4.99a7.774 7.774 0 0 0-2.846 10.62A7.78 7.78 0 0 0 18.9 42.457l17.985-10.429c5.18-3.003 5.179-13.051 0-16.055L18.9 5.543a7.76 7.76 0 0 0-5.9-.778");
}
</style><path class="yexlm0_lf"/><path class="nvc64umsv"/>`,
		"fallback": "arcticons:youku",
	});
}

export default Component;
