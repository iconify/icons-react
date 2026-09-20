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
		"content": `<style>.msnsrwb0l {
  fill: currentColor;
  d: path("M4 20v-5h1v3.292l3.6-3.6l.708.708l-3.6 3.6H9v1zm11 0v-1h3.292l-3.6-3.6l.708-.708l3.6 3.6V15h1v5zM8.6 9.308L5 5.708V9H4V4h5v1H5.708l3.6 3.6zm6.8 0l-.708-.708l3.6-3.6H15V4h5v5h-1V5.708z");
}
</style><path class="msnsrwb0l"/>`,
		"fallback": "material-symbols-light:zoom-out-map-outline",
	});
}

export default Component;
