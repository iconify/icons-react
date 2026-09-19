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
		"content": `<style>.kzzswhivh {
  cx: 15.09px;
  cy: 15.804px;
  r: 3.798px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.mur63navn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m43.435 36.763l-14.211-14.21c1.355-4.072.425-8.736-2.815-11.977c-4.57-4.569-11.978-4.569-16.547 0s-4.57 11.978 0 16.547c3.709 3.709 9.288 4.407 13.701 2.095l2.15 2.15l1.32-1.32l9.568 9.57l6.19.331z");
}

.p-9otq8au {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.791 39.949L29.935 27.092l-2.903 2.957");
}
</style><circle class="kzzswhivh"/><path class="mur63navn"/><path class="p-9otq8au"/>`,
		"fallback": "arcticons:yandex-key",
	});
}

export default Component;
