import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mv7lhtbjv.css';
import '../../css/b/bou7a7jit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mv7lhtbjv"/><path class="bou7a7jit"/>`,
		"fallback": "boxicons:widget-vertical",
	});
}

export default Component;
