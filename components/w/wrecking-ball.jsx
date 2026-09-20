import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ipf2obclz.css';
import '../../css/w/w90_efw5n.css';
import '../../css/x/xwjlk1gsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ipf2obclz"/><path class="w90_efw5n"/><path class="xwjlk1gsf"/></g>`,
		"fallback": "tabler:wrecking-ball",
	});
}

export default Component;
