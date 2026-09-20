import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/scw5hpb6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="scw5hpb6y"/>`,
		"fallback": "pixel:x",
	});
}

export default Component;
