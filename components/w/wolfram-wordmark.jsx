import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iho0xwbvy.css';
import '../../css/y/y4n_h670s.css';
import '../../css/f/fvvvflbjm.css';
import '../../css/b/b4iy1niww.css';
import '../../css/u/up_cdgbqs.css';
import '../../css/k/kos-efsqe.css';
import '../../css/y/yxtrwipro.css';
import '../../css/p/po8vg12xr.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iho0xwbvy"/><path class="y4n_h670s"/><path class="fvvvflbjm"/><path class="b4iy1niww"/><path class="up_cdgbqs"/><path class="kos-efsqe"/><path class="yxtrwipro"/><path class="po8vg12xr"/>`,
		"fallback": "devicon:wolfram-wordmark",
	});
}

export default Component;
