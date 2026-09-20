import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s5wjr301p.css';
import '../../css/v/vdun36bvu.css';
import '../../css/y/y9pibd9fz.css';
import '../../css/f/faxepgk3z.css';
import '../../css/q/qg1ro4btx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="s5wjr301p"/><path class="vdun36bvu"/><path class="y9pibd9fz"/><path class="faxepgk3z"/><path class="qg1ro4btx"/></g>`,
		"fallback": "solar:win-rar-bold",
	});
}

export default Component;
