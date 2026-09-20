import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4q-tzb2p.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o4q-tzb2p"/>`,
		"fallback": "teenyicons:x-circle-solid",
	});
}

export default Component;
