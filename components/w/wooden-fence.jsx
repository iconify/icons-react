import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvw2c-b8x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvw2c-b8x"/>`,
		"fallback": "game-icons:wooden-fence",
	});
}

export default Component;
