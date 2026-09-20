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
		"content": `<style>.n1vq-q6mz {
  fill: currentColor;
  d: path("M11.2 18h1.65v-4.625L16.475 7.5H14.6L12 11.85L9.45 7.5H7.525l3.675 5.9zm-3.1 3.213q-1.825-.788-3.175-2.138T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22t-3.9-.788");
}
</style><path class="n1vq-q6mz"/>`,
		"fallback": "material-symbols:y-circle",
	});
}

export default Component;
