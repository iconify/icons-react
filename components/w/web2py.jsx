import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpk_aciym.css';
import '../../css/a/aentn7bbl.css';
import '../../css/s/spc4sabls.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rpk_aciym"/><path class="aentn7bbl"/><path class="spc4sabls"/>`,
		"fallback": "devicon:web2py",
	});
}

export default Component;
