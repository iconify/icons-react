import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvu1scc_a.css';
import '../../css/k/kh1pia80p.css';
import '../../css/a/aun6_3zku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wvu1scc_a"/><path clip-rule="evenodd" class="kh1pia80p"/><path class="aun6_3zku"/>`,
		"fallback": "token:zero",
	});
}

export default Component;
