import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vb57xdezs.css';
import '../../css/w/ww0cs-a5b.css';
import '../../css/l/lsh3gybrg.css';
import '../../css/c/c4pumdbww.css';
import '../../css/a/adtwlobkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vb57xdezs"/><path class="ww0cs-a5b"/><path class="lsh3gybrg"/><path class="c4pumdbww"/><path class="adtwlobkt"/></g>`,
		"fallback": "tabler:whirl",
	});
}

export default Component;
