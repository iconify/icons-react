import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/ft9-109ob.css';
import '../../css/g/g3hkjxb7a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ft9-109ob"/><path class="g3hkjxb7a"/></g>`,
		"fallback": "streamline-color:wheelchair-flat",
	});
}

export default Component;
