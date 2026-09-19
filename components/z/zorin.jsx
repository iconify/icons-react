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
		"content": `<style>.vbd893b6t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m10.333 35.863l3.409 5.904h20.516l3.409-5.904zM44.5 24l-3.438 5.959H19.244L41.062 18.04zm-41 0l3.438-5.959h21.818L6.938 29.96zm6.833-11.863l3.409-5.904h20.516l3.409 5.904z");
}
</style><path class="vbd893b6t"/>`,
		"fallback": "arcticons:zorin",
	});
}

export default Component;
