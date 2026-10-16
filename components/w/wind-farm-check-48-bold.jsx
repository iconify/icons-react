import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-a5mzb4l.css';
import '../../css/e/evqw8y97a.css';
import '../../css/z/zgmnev-xx.css';
import '../../css/i/i4me1c02s.css';
import '../../css/d/dij7babju.css';
import '../../css/b/b5hw9u9ob.css';
import '../../css/o/oa5mz4smb.css';
import '../../css/y/y9mg2tbzu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-a5mzb4l"/><path class="evqw8y97a"/><path class="zgmnev-xx"/><path class="i4me1c02s"/><path class="dij7babju"/><path class="b5hw9u9ob"/><path class="oa5mz4smb"/><path class="y9mg2tbzu"/>`,
		"fallback": "energy-icons:wind-farm-check-48-bold",
	});
}

export default Component;
