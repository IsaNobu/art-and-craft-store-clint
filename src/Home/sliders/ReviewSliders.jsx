import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../index.css";

const ReviewSliders = () => {
  return (
    <div>
      <div className="flex justify-center mt-52">
        <div>
          <div className="text-center text-3xl playfair-display font-medium mb-12">
            <h1>
              Here from our thousands of happy <br /> customers every day
            </h1>
          </div>
          <div className="w-[800px]">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              navigation={true}
              pagination={{ clickable: true }}
              modules={[]}
            >
              <SwiperSlide>
                <div className="space-y-6">
                  <div className="flex flex-col items-center">
                    <img
                      className="w-[100px] h-[100px] rounded-[50%]"
                      src="https://i.ibb.co/b2Ct4Lj/img5.jpg"
                      alt=""
                    />
                  </div>
                  <div className="flex justify-center">
                    <div className="rating rating-md">
                      <input
                        type="radio"
                        name="rating-7"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-7"
                        className="mask mask-star-2 bg-orange-400"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-7"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-7"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-7"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <p className="w-[650px] text-center">
                      I recently started attending an arts and crafts painting
                      class, and I am absolutely loving it! It is such a great
                      way to de-stress after a long day. The instructor is
                      fantastic, providing clear guidance and encouraging
                      creativity. I have learned new techniques and discovered a
                      hidden talent for painting! Even if you are a beginner,
                      this is a wonderful activity to explore your artistic side
                      and have some fun. - Sarah K.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="space-y-6">
                  <div className="flex flex-col items-center">
                    <img
                      className="w-[100px] h-[100px] rounded-[50%]"
                      src="https://i.ibb.co/305zxJr/img6.jpg"
                      alt=""
                    />
                  </div>
                  <div className="flex justify-center">
                    <div className="rating rating-md">
                      <input
                        type="radio"
                        name="rating-7"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-7"
                        className="mask mask-star-2 bg-orange-400"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-7"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-7"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-7"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <p className="w-[650px] text-center">
                      My kids absolutely love our arts and crafts painting
                      nights! We set up a dedicated space with paints, brushes,
                      paper, and let their imaginations run wild. It is a great
                      way to bond with them, encourage their creativity, and
                      keep them entertained. While the clean-up can be a bit
                      messy, it is definitely worth it to see their smiling
                      faces and their unique artwork.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="space-y-6">
                  <div className="flex flex-col items-center">
                    <img
                      className="w-[100px] h-[100px] rounded-[50%]"
                      src="https://i.ibb.co/1JbdgMG/img4.jpg"
                      alt=""
                    />
                  </div>
                  <div className="flex justify-center">
                    <div className="rating rating-md">
                      <input
                        type="radio"
                        name="rating-7"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-7"
                        className="mask mask-star-2 bg-orange-400"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-7"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-7"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-7"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <p className="w-[650px] text-center">
                      I recently took a pottery painting class with a friend,
                      and it was so much fun! We picked out mugs and
                      personalized them with our own designs. It was a unique
                      and creative way to spend an afternoon together. The
                      finished mugs are now cherished keepsakes, and I plan to
                      take another class soon to create a personalized gift for
                      my sisters birthday.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="space-y-6">
                  <div className="flex flex-col items-center">
                    <img
                      className="w-[100px] h-[100px] rounded-[50%]"
                      src="https://i.ibb.co/3yqyYcd/img3.jpg"
                      alt=""
                    />
                  </div>
                  <div className="flex justify-center">
                    <div className="rating rating-md">
                      <input
                        type="radio"
                        name="rating-7"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-7"
                        className="mask mask-star-2 bg-orange-400"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-7"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-7"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-7"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <p className="w-[650px] text-center">
                      I recently took a watercolor painting course, and it was
                      so much more challenging than I expected! Learning about
                      color mixing, brush techniques, and light and shadow was
                      fascinating. While it took some practice, I am proud of
                      the progress I have made and the beautiful landscapes I
                      have been able to create. It is a truly rewarding
                      experience to see your artistic skills develop over time.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="space-y-6">
                  <div className="flex flex-col items-center">
                    <img
                      className="w-[100px] h-[100px] rounded-[50%]"
                      src="https://i.ibb.co/b2Ct4Lj/img5.jpg"
                      alt=""
                    />
                  </div>
                  <div className="flex justify-center">
                    <div className="rating rating-md">
                      <input
                        type="radio"
                        name="rating-7"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-7"
                        className="mask mask-star-2 bg-orange-400"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-7"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-7"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-7"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <p className="w-[650px] text-center">
                      I recently started attending an arts and crafts painting
                      class, and I am absolutely loving it! It is such a great
                      way to de-stress after a long day. The instructor is
                      fantastic, providing clear guidance and encouraging
                      creativity. I have learned new techniques and discovered a
                      hidden talent for painting! Even if you are a beginner,
                      this is a wonderful activity to explore your artistic side
                      and have some fun. - Sarah K.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="space-y-6">
                  <div className="flex flex-col items-center">
                    <img
                      className="w-[100px] h-[100px] rounded-[50%]"
                      src="https://i.ibb.co/DgJvtz5/img1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="flex justify-center">
                    <div className="rating rating-md">
                      <input
                        type="radio"
                        name="rating-7"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-7"
                        className="mask mask-star-2 bg-orange-400"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-7"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-7"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-7"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <p className="w-[650px] text-center">
                      Participating in a community arts and crafts fair was a
                      fantastic experience! It was a great way to showcase my
                      artwork, connect with other local artists, and learn new
                      things. The energy was positive and inspiring, and I
                      enjoyed interacting with the supportive and appreciative
                      crowd. I am already looking forward to participating in
                      the next fair!
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSliders;
