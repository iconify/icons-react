import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rul5p_c_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rul5p_c_p"/>`,
		"fallback": "reicon:wineglass",
	});
}

export default Component;
