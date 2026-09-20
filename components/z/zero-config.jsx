import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ys8spe0-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ys8spe0-c"/>`,
		"fallback": "tabler:zero-config",
	});
}

export default Component;
