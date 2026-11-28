import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pf7zo5b1i.css';
import '../../css/b/bpf-dccqg.css';
import '../../css/m/mwi17isqe.css';
import '../../css/n/n3vdhmblp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="pf7zo5b1i"/><path class="bpf-dccqg"/><path class="mwi17isqe"/><path class="n3vdhmblp"/></g>`,
		"fallback": "iconaut:yen-duo",
	});
}

export default Component;
