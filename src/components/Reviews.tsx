
const Reviews = async ({ productId }: { productId: string }) => {
  const reviewRes = await fetch(
    `https://api.fera.ai/v3/public/reviews?product.id=${productId}&public_key=${process.env.NEXT_PUBLIC_FERA_ID}`
  );
  const reviews = await reviewRes.json();

  // Optional: log the response to debug structure
  // console.log(reviews);

  // Render reviews if data is an array
  return (
    <div>
      {Array.isArray(reviews.data) ? (
        reviews.data.map((review: any) => (
          <div className="flex flex-col gap-4" key={review.id}>
            {/* USER */}
            <div className="flex items-center gap-4 font-medium">
              <img
                src={review.user?.avatar || "/default-avatar.png"}
                alt={review.user?.name || "User"}
                className="w-10 h-10 rounded-full"
              />
              <span>{review.user?.name || "Anonymous"}</span>
            </div>
            {/* REVIEW CONTENT */}
            <div>
              <p>{review.content}</p>
              <span className="text-sm text-gray-500">
                {review.createdAt
                  ? new Date(review.createdAt).toLocaleDateString()
                  : ""}
              </span>
            </div>
          </div>
        ))
      ) : (
        <p>No reviews found.</p>
      )}
    </div>
  );
};

export default Reviews;
