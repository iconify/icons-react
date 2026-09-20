import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ahwjz2bvl.css';
import '../../css/k/kuvr1btsk.css';
import '../../css/s/srl0bo8rs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ahwjz2bvl"/><path class="kuvr1btsk"/><path class="srl0bo8rs"/></g>`,
		"fallback": "si:youtube-duotone",
	});
}

export default Component;
