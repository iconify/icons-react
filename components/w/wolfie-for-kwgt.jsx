import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vpskdnb8d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.588 38.542h4.823L24 41.257Zm-4.993-12.32l3.456.987l1.974 2.962l-1.48-1.481h-2.469Zm14.809 0l-3.456.987l-1.975 2.962l1.482-1.481h2.468Z");
}

.zhmv_vbnb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m14.127 4.5l4.937 8.886l-6.912 2.962Zm19.796 0l-4.937 8.886l6.912 2.962ZM9.683 18.816l12.342 4.444L24 28.69l1.975-5.43l12.342-4.443l-3.456 6.911l2.469-.493l-4.937 4.936h1.975l-3.95 2.962l-3.456 8.886L24 43.5l-2.962-1.481l-3.455-8.886l-3.95-2.962h1.975l-4.937-4.937l2.469.494Z");
}
</style><path class="zhmv_vbnb"/><path class="vpskdnb8d"/>`,
		"fallback": "arcticons:wolfie-for-kwgt",
	});
}

export default Component;
