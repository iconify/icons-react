import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4-uf1bww.css';
import '../../css/v/voawabbjg.css';
import '../../css/t/tcf_pkbva.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4-uf1bww"/><path class="voawabbjg"/><path class="tcf_pkbva"/>`,
		"fallback": "flag:xk-1x1",
	});
}

export default Component;
