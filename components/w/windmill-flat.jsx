import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rnqahqbur.css';
import '../../css/g/g999chbyn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rnqahqbur"/><path class="g999chbyn"/></g>`,
		"fallback": "streamline-flex-color:windmill-flat",
	});
}

export default Component;
