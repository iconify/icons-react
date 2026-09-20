import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfl1ecc1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfl1ecc1d"/>`,
		"fallback": "thesvg-color:yandex-cloud",
	});
}

export default Component;
