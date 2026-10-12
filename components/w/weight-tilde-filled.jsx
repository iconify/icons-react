import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzfod5zsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jzfod5zsw"/>`,
		"fallback": "lucide-extended:weight-tilde-filled",
	});
}

export default Component;
