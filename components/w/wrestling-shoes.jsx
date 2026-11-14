import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ka-pzcb9o {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M11.5 1.75h-7q-.071 0-.14.013q-.07.014-.136.04t-.125.064q-.06.037-.112.086t-.093.106q-.042.057-.072.121t-.048.132t-.022.14l-1 15.5L2.75 18q0 .145.054.279q.053.134.153.239q-.207.512-.207 1.232q0 1.036.732 1.768t1.768.732h14.5q1.036 0 1.768-.732t.732-1.768q0-.641-.28-1.165q.065-.053.118-.119t.088-.142q.037-.076.055-.158T22.25 18q0-3.601-3.044-4.471l-.024-.007l-4-1Q12.25 11.789 12.25 10V2.5q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043q-.072-.014-.146-.014");
}
</style><path class="ka-pzcb9o"/>`,
		"fallback": "uix-solid:wrestling-shoes",
	});
}

export default Component;
