import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nunwyac9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nunwyac9a"/>`,
		"fallback": "hugeicons:wifi-off-02",
	});
}

export default Component;
