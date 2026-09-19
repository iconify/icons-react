import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chp_nybzg.css';
import '../../css/z/ze1bd391g.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chp_nybzg"/><path class="ze1bd391g"/>`,
		"fallback": "devicon:zsh",
	});
}

export default Component;
