import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzwn2cbpy.css';
import '../../css/x/ximcoetmm.css';
import '../../css/f/fh6wb561q.css';
import '../../css/w/w92opjbrw.css';
import '../../css/m/m29cb185f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rzwn2cbpy"/><path class="ximcoetmm"/><path class="fh6wb561q"/><path class="w92opjbrw"/><path class="m29cb185f"/>`,
		"fallback": "solar:win-rar-bold",
	});
}

export default Component;
